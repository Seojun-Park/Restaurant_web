import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapPresenter extends Component {
    state = {
        showinginWindow: false,
        activeMarker: {},
        seletedPlace: {}
    };

    onMarkerClick = (props, marker, e) => {
    this.setState({
        seletedPlace:props,
        activeMarker:marker,
        showinginWindow: true
        });
    }

    onClose = props => {
        if (this.state.showinginWindow) {
            this.setState({
                showinginWindow: false,
                activeMarker:null
            });
        }
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={16}
                style={mapStyles}
                initialCenter={{
                    lat: 48.8964,
                    lng: 2.3185
                }}>
                    <Marker
                        onClick={this.onMarkerClick}
                        name='Ecole 42 (Maybe home?)'
                        />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showinginWindow}
                        onClose={this.onClose}
                        >
                        <div>
                            <h4>{this.state.seletedPlace.name}</h4>
                        </div>
                    </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey : 'AIzaSyAjVzfgQpGin9L9zRJK5dO_WIM1x9qgdHI'
})(MapPresenter);