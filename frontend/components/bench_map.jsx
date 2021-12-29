import React from "react";
import MarkerManager from "../util/marker_manager";

class BenchMap extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, 
            zoom: 13 
        }
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.markerManager = new MarkerManager(this.map)
    this.markerManager.updateMarkers(this.props.benches)

    this.map.addListener('idle', () => {
       let mapBounds = this.map.getBounds();
       let ne = mapBounds.getNorthEast();
       let sw = mapBounds.getSouthWest();
        let bounds = {['northeast']: ne, ['southwest']: sw}
        debugger
        this.props.updateBounds(bounds);
    });
    }

    componentDidUpdate() {
        this.markerManager.updateMarkers(this.props.benches)
    }

    render () {
        return (
            <div id='map-container' ref={ map => this.mapNode = map } >

            </div>
        )
    }
}

export default BenchMap;