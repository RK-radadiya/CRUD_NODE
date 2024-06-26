

const { Series } = require("../model")


const create_series_s =(data)=>{
    return Series.create(data)
}

const update_series_s = (id, data) => {
    return Series.findByIdAndUpdate(id, data)
}

module.exports = {
    create_series_s,
    update_series_s
}