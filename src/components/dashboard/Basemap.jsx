import React from "react";

class Basemap extends React.Component {
  onChange = (e) => {
    var bm = e.currentTarget.value;

    if (this.props.onChange) {
      this.props.onChange(bm);
    }
  };

  render() {
    return (
      <div className="basemaps-container">
        <select value={this.props.basemap} onChange={this.onChange}>
          <option value="osm">OSM</option>
          <option value="Sentinel2">Sentinel-2</option>
          <option value="BGMountains">BGMountains</option>
          <option value="GoogleHybrid">Google Hybrid</option>
          <option value="hot">OSM HOT</option>
          <option value="dark">DARK</option>
          <option value="cycle">CYCLE MAP</option>
          <option value="sentinel">Sentinel Test Data </option>
        </select>
      </div>
    );
  }
}

export default Basemap;
