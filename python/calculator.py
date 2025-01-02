from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)
CORS(app)

np.random.seed(42)


data = {
    'public_transportation': np.random.randint(50, 1000, 100),  
    'private_transportation': np.random.randint(100, 1500, 100),  
    'electricity': np.random.randint(500, 2500, 100),  
    'water': np.random.randint(10, 400, 100),  
    'waste_management': np.random.randint(10, 250, 100),  
    'beef': np.random.randint(50, 900, 100),  
    'vegetables': np.random.randint(50, 400, 100)
}

emission_factors = {
    'public_transportation': 0.01,
    'private_transportation': 0.02,
    'electricity': 0.12,
    'water': 0.005,
    'waste_management': 0.002,
    'beef': 0.03,
    'vegetables': 0.002
}

def calculate_green_score(row):
    total_emission = (
        row['public_transportation'] * emission_factors['public_transportation'] +
        row['private_transportation'] * emission_factors['private_transportation'] +
        row['electricity'] * emission_factors['electricity'] +
        row['water'] * emission_factors['water'] +
        row['waste_management'] * emission_factors['waste_management'] +
        row['beef'] * emission_factors['beef'] +
        row['vegetables'] * emission_factors['vegetables']
    )
    return 1000 - total_emission


df = pd.DataFrame(data)
df['green_score'] = df.apply(calculate_green_score, axis=1)

X = df.drop('green_score', axis=1)
y = df['green_score']


scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)


X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)


model = RandomForestRegressor(random_state=42)

param_grid = {
    'n_estimators': [50, 100, 150],
    'max_depth': [None, 10, 20],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4]
}

grid_search = GridSearchCV(estimator=model, param_grid=param_grid, cv=5, n_jobs=-1, verbose=2)
grid_search.fit(X_train, y_train)

best_model = grid_search.best_estimator_

@app.route('/predict_green_score', methods=['POST'])
def predict_green_score():
    user_data = request.json

   
    public_transportation = user_data.get('public_transportation', 0)
    private_transportation = user_data.get('private_transportation', 0)
    electricity = user_data.get('electricity', 0)
    water = user_data.get('water', 0)
    waste_management = user_data.get('waste_management', 0)
    beef = user_data.get('beef', 0)
    vegetables = user_data.get('vegetables', 0)


    input_data = scaler.transform(np.array([[public_transportation, private_transportation, electricity, water, waste_management, beef, vegetables]]))


    predicted_green_score = best_model.predict(input_data)[0]

    print(f"Predicted Green Score: {predicted_green_score}")
    jsondata = jsonify({'predicted_green_score': predicted_green_score})

    return jsondata

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)  
    
    