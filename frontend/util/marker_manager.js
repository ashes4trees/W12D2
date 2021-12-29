import React from "react";

export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
        
    }

    updateMarkers(benches) {
        benches.forEach(bench => this.markers[bench.id] ? next : this.createMarkerFromBench(bench));
    }

    createMarkerFromBench(bench) {
        const lat = bench.lat
        const lng = bench.lng
        const map = this.map
        const desc = bench.description
        const marker = new google.maps.Marker({
            position: {lat, lng},
            map,
            title: desc
        })
    this.markers[bench.id] = marker
    
    }
}