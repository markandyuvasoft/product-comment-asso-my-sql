module.exports = (sequelize, DataTypes) => {


    const Comment = sequelize.define("comment", {

        text: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    })

    return Comment
}