# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all

bench1 = Bench.create(description: 'Beautiful bench', lat: 37.75782067231961, lng: -122.46764944683073)
bench2 = Bench.create(description: 'Lots of shade', lat: 37.76840580284156, lng: -122.45340155396472)
bench3 = Bench.create(description: 'Too hard', lat: 37.79391245516268, lng: -122.45752142660065)
bench4 = Bench.create(description: 'Great place to feed pigeons', lat: 37.76894858921239, lng: -122.46541784915291)
bench5 = Bench.create(description: 'Best people watching', lat: 37.76202776455821, lng: -122.4146060866428)
