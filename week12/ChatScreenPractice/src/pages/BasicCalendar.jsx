import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {LocaleConfig, Calendar} from 'react-native-calendars';
import dayjs from 'dayjs';

LocaleConfig.locales['kr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['일', '월', '화', '수', '목', '금', '토', '일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토', '일'],
};
LocaleConfig.defaultLocale = 'kr';

const TODAY = dayjs();
const MAX_DATE = dayjs().add(365, 'd');

const dummy_data = [
  {
    id: 1,
    date: '2024-07-10',
    note: '급여',
  },
];

const BasicCalendar = () => {
  const [selectedDay, setSelectedDay] = useState('');

  const renderArrow = e => {
    return (
      <View>
        <Text>화살표</Text>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return <View>{selectedDay === item.date && <Text>{item.note}</Text>}</View>;
  };

  return (
    <View style={{flex: 1, marginTop: 100}}>
      <Calendar
        markingType="custom"
        minDate={TODAY.format('YYYY-MM-DD')}
        maxDate={MAX_DATE.format('YYYY-MM-DD')}
        initialDate={dayjs(new Date()).format('YYYY-MM-DD')}
        onDayPress={day => setSelectedDay(day.dateString)}
        markedDates={{
          [selectedDay]: {
            selected: true,
            selectedColor: 'red',
            activeOpacityy: 0.8,
          },
        }}

        //renderArrow={e => renderArrow(e)}
      />
      <FlatList data={dummy_data} renderItem={e => renderItem(e)}></FlatList>
    </View>
  );
};

export default BasicCalendar;
