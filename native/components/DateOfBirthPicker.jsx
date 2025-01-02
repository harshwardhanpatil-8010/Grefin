import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DateOfBirthPicker = () => {
    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return { day, month, year };
      };
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dob, setDob] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDob(date);
    hideDatePicker();
  };

  return (
    <View style={{ padding: 20 }}>
      <Button className='bg-[#3DD68C]' title="Select Date of Birth" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 18))} // Only allow 18+ dates
      />
      {dob && (
        <View className='flex-row pt-10 items-center justify-center gap-6 '>
         <View>
          <View className='border-2 rounded-lg border-[#3DD68C] p-2 m-1 items-center justify-center'>
            <Text className='text-lg text-white'>{formatDate(dob).day}</Text>
          </View>
          <View>   
           <Text className='text-white text-center font-semibold'>Day</Text>
          </View>
          </View>
          <View>
          <View className='border-2 rounded-lg border-[#3DD68C] p-2 m-1 items-center justify-center'>
            <Text className='text-lg text-white'>{formatDate(dob).month}</Text>
          </View>
          <View>   
           <Text className='text-white text-center font-semibold'>Month</Text>
          </View>
          </View>
          <View>
          <View className='border-2 rounded-lg border-[#3DD68C] p-2 m-1 items-center justify-center'>
            <Text className='text-lg text-white'>{formatDate(dob).year}</Text>
          </View>
          <View>   
           <Text className='text-white text-center font-semibold'>Year</Text>
          </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default DateOfBirthPicker;
