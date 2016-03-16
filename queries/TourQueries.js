import Relay from 'react-relay'

export default {
  tour: () => Relay.QL`query { tour(id: $tourId) }`
}
