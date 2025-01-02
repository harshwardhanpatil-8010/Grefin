from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler
from pymongo import MongoClient
from sklearn.feature_extraction.text import CountVectorizer

app = Flask(__name__)
CORS(app)

np.random.seed(42)


client = MongoClient('mongodb+srv://theencoders5:Haecker@grefin.uv0qm.mongodb.net/')  
db = client['test']
collection = db['transactions']  

def fetch_data_from_mongo():
    data = list(collection.find())
    df = pd.DataFrame(data)
    
    if '_id' in df.columns:
        df = df.drop('_id', axis=1)
    return df


keywords = {
    'public_transportation': ['bus', 'train', 'metro', 'Uber', 'OLA'],
    'private_transportation': ['fuel', 'gasoline', 'diesel', 'HP', 'petrol pump', 'pump', 'oil'],
    'electricity': ['electricity', 'power bill', 'Mahavitran', 'MSEDCL'],
    
}

# Emission factors corresponding to each category
emission_factors = {
    'public_transportation': 0.01,
    'private_transportation': 0.02,
    'electricity': 0.12,
    'water': 0.005,
    'waste_management': 0.002,
    'beef': 0.03,
    'vegetables': 0.002
}

def process_transactions_for_green_score(transactions):
    green_score = 1000  # Start with a base score

    for category, words in keywords.items():
        # Filter transactions that match the keywords for this category
        vectorizer = CountVectorizer(vocabulary=words)
        word_counts = vectorizer.fit_transform(transactions['description'])  # Assuming 'description' field in transactions

        matching_transactions = pd.DataFrame(word_counts.toarray(), columns=vectorizer.get_feature_names_out())
        matching_transactions['amount'] = transactions['amount']  # Assuming 'amount' field in transactions

        # Calculate total emission for this category
        total_emission = matching_transactions['amount'].sum() * emission_factors[category]
        green_score -= total_emission

    return green_score

df = fetch_data_from_mongo()

# Example mock transaction data
transactions = pd.DataFrame([
    {'description': 'Paid electricity bill', 'amount': 100},
    {'description': 'Bought organic vegetables', 'amount': 50},
    {'description': 'Refueled with gasoline', 'amount': 40},
])

# Calculate green score based on transactions
green_score = process_transactions_for_green_score(transactions)
df['green_score'] = green_score

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
    transactions = pd.DataFrame(user_data.get('transactions', []))  # Assuming transactions come as a list of dicts

    # Calculate green score based on transactions
    green_score = process_transactions_for_green_score(transactions)

    input_data = scaler.transform(np.array([[public_transportation, private_transportation, electricity, water, waste_management, beef, vegetables]]))

    predicted_green_score = best_model.predict(input_data)[0]

    print(f"Predicted Green Score: {predicted_green_score}")
    jsondata = jsonify({'predicted_green_score': predicted_green_score, 'green_score': green_score})

    return jsondata

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

