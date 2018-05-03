# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


@locations = ["Park City", "Salt Lake City", "Ogden", "Provo", "Orem", "St. George"]
@categories = ["MFP", "Router", "Switch", "Server", "Other"]

100.times do |i|
  ip = Faker::Internet.private_ip_v4_address
  name = "Device #{i}"
  location = @locations.sample
  category = @categories.sample
  Device.create(ip_address: ip, name: name, location: location, category: category)
end

