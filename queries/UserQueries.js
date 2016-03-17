import Relay from 'react-relay'

export default {
  currentUser: () => Relay.QL`query { currentUser }`
}
