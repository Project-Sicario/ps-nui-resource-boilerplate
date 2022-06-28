import { useState } from 'react';
import { debugData, useNuiEvent, fetchNui } from '../nui';
import './style.scss';

const SpawnDialog: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [spawnLocations, setSpawnLocations] = useState([
    { id: 'loading', location: 'Loading...', coords: { x: 0, y: 0, z: 0 } },
  ]);
  var [currentLocationData, setCurrentLocationData] = useState(null);
  var [currentLocation, setCurrentLocation] = useState(null);
  var [previousLocation, setPreviousLocation] = useState(null);

  useNuiEvent<any>('nui-spawndialog', data => {
    if (data.toggle == true) {
      if (previousLocation != null) {
        var prevElement = document.getElementById(previousLocation);
        prevElement?.classList.remove('selected');
      }
      setCurrentLocationData(null);
      setCurrentLocation(null);
      setPreviousLocation(null);
      getSpawnLocations();
    }
    setIsVisible(data.toggle);
  });

  function getSpawnLocations() {
    fetchNui('GetSpawnLocations', 'ps-spawn')
      .then(retData => {
        setSpawnLocations(retData);
      })
      .catch(e => {
        setSpawnLocations([
          { id: 'debugLocation', location: 'Debug or Failure', coords: { x: 0, y: 0, z: 0 } },
          { id: 'debugLocation2', location: 'Debug or Failure', coords: { x: 0, y: 0, z: 0 } },
        ]);
      });
  }

  // Really scuffed but it works
  function Selected(location: any) {
    var element = document.getElementById(location.id);
    if (previousLocation != null) {
      var prevElement = document.getElementById(previousLocation);
      prevElement?.classList.remove('selected');
    }
    element?.classList.add('selected');
    previousLocation = location.id;
    currentLocation = location.id;
    currentLocationData = location;
  }

  function Submit() {
    if (currentLocation != null) {
      fetchNui('SpawnPlayer', 'ps-spawn', currentLocationData);
    }
  }

  return (
    <div className="spawndialog" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
      <div className="spawns">
        <h1>Spawn Locations</h1>
        <div className="buttons" id="locations">
          {spawnLocations.map((location, index) => {
            return (
              <button
                onClick={() => {
                  Selected(spawnLocations[index]);
                }}
                id={spawnLocations[index].id}
                style={{
                  marginBottom: '20px',
                  width: '100%',
                  color: 'rgb(220, 220, 220)',
                  borderColor: '#23ACFF',
                  border: '2px #23ACFF solid',
                }}
              >
                {spawnLocations[index].location}
              </button>
            );
          })}
          <button
            onClick={Submit}
            style={{ backgroundColor: '#31C031', width: '100%' }}
            id="submit"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpawnDialog;
