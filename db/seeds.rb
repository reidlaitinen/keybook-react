# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def generate_model_number
  model_number = ''
  3.times do
    model_number += (0..1).map { (65 + rand(26)).chr }.join
  end
  model_number += '-'
  4.times do
    model_number += rand(0..9).to_s
  end

  return model_number

end

@locations = ["Park City", "Salt Lake City", "Ogden", "Provo", "Orem", "St. George"]
@categories = ["MFP", "Router", "Switch", "Server", "Other"]
@mfgs = ["Cisco", "Dell", "HP", "IBM", "Sharp", "Xerox", "Apple", "Hooli"]

100.times do |i|
  ip = Faker::Internet.private_ip_v4_address
  description = Faker::Hipster.paragraph(1)
  name = "Device #{i}"
  location = @locations.sample
  category = @categories.sample
  serial_number = Faker::Vehicle.vin
  model_number = generate_model_number
  deployed_date = Faker::Date.backward(1200)
  mfg = @mfgs.sample
  Device.create(ip_address: ip, 
                name: name, 
                location: location, 
                category: category, 
                description: description, 
                mfg: mfg,
                deployed_date: deployed_date,
                serial_number: serial_number, 
                model_number: model_number,
                deleted: false)
end

@devices = Device.all

@devices.each_with_index do |d, i|
  device_id = d.id
  telnet_url = "telnet://#{d.ip_address}"
  http_url = "http://#{d.ip_address}"
  username = "user_#{d.name}"
  password = "pass_#{d.name}"
  notes = Faker::Hipster.paragraphs(1)
  Credential.create(device_id: device_id, url: telnet_url, username: username, password: password, category: "telnet", notes: notes)
  Credential.create(device_id: device_id, url: http_url, username: username, password: password, category: "http", notes: notes)
end

