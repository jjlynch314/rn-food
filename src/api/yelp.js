import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer eiZFcJrVd4M67caIt9faFuw-Ioitr3RjkPyMSiFGOejbSc4ZVqiQhEXJM24Mw4_nPwA3w7oKpeAc94fSOS6HUR3HJxe2Iqi-IeuPlUtPerZgNFs8W18PN1uYc2OCZHYx'
  }
});
