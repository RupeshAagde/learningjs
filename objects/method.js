let restaurant ={
    name: 'ABC',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(count){
        let seatLeft = this.guestCapacity - this.guestCount
        return count <= seatLeft
    },
    seatParty: function(count){
        this.guestCount = this.guestCount + count 
    },
    seatRemove: function(count){
        this.guestCount = this.guestCount - count

    }


}
restaurant.seatParty(35)
restaurant.seatParty(40)
restaurant.seatRemove(12)
console.log(restaurant.checkAvailability(10))