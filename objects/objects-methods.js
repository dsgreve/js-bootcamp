let restaurant = {
  name: 'Station Grill',
  guestCapacity: 75,
  guestCount: 0,
  seatParty: 0,
  checkAvailability: function (partySize) {
    //console.log(this.guestCapacity)

    let seatsLeft = this.guestCapacity - this.guestCount

    return partySize <= seatsLeft
  }
}


restaurant.seatParty(72)
console.log(restaurant.checkAvailability(5))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(5))