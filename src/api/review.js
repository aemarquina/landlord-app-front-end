import apiUrl from '../apiConfig'
import axios from 'axios'

export const reviewCreate = (review, user) => {
  return axios({
    url: apiUrl + '/reviews',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: { review }
  })
}
