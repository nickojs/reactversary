import moment from 'moment';

export default (data) => {
  const result = data.map((each) => {
    const parsedData = moment(each.date).format('dddd, MMMM Do YYYY');
    return ({
      ...each,
      date: parsedData
    });
  });
  return result;
};
