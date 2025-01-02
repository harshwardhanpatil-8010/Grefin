import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';


const CircularProgressBar = ({ progress }) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (progress / 100) * circumference;

  return (
    <View className='flex items-center justify-center'>
      <Svg width="150" height="150" viewBox="0 0 120 120">
        <Circle
          stroke="#e6e6e6"
          fill="none"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth={strokeWidth}
        />
     
        <Circle
          stroke="#3DD68C"
          fill="none"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
        />
        
      </Svg>
    </View>
  );
};

export default CircularProgressBar;
