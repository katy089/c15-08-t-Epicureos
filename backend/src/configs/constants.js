const USER_STATUS = {
    ACTIVATE: 'activated',
    PENDING: 'pending',
    RECOVER: 'recover'
}

const BOOKING_QUALIFY = {
    ENABLED: 'enabled',
    DISABLED: 'disabled'
}

const BOOKING_STATUS = {
    RESERVED: 'reserved',
    ARRIVE: 'arrive',
    CANCELLED: 'cancelled', 
    GHOST: 'ghost'   
}

const AVALIABILITY_STATUS = {
    ENABLED: 'enabled',
    DISABLED: 'disabled'

}

module.exports = { 
    USER_STATUS,
    BOOKING_QUALIFY,
    BOOKING_STATUS,
    AVALIABILITY_STATUS
}