
module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burger", {
	  burger_name: {
		type: DataTypes.STRING,
		allowNull: false
	  },
	  devoured: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	  },
	});

	Burger.associate = (models) => {
		Burger.hasOne(models.Customer);
	}
	
	return Burger;
};