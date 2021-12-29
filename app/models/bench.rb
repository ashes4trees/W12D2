class Bench < ApplicationRecord
    validates :description, :lat, :lng, presence: true

    def self.in_bounds(bounds)
        if bounds[:southWest][:lat] <= self.lat <= bounds[:northEast][:lat] &&
            bounds[:southWest][:lng] <= self.lng <= bounds[:northEast][:lng]
            return self 
        end
    end
    
end