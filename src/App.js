import './App.css';
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';

const App = () => {
  const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 100,
  });

  const list = Array(1000)
    .fill()
    .map((val, idx) => {
      return {
        id: idx,
        name: 'John Doe',
        image: 'http://via.placeholder.com/40',
        text: 'text description text description text description text description text description text description text description text description text description text description text description text description text description text description text description text description text description text description text description text description text description text description text description  ',
      };
    });

  const renderRow = ({ index, key, style, parent }) => {
    return (
      <CellMeasurer key={key} cache={cache} parent={parent} columnIndex={0} rowIndex={index}>
        <div key={key} style={style} className="row">
          <div className="image">
            <img src={list[index].image} alt="" />
          </div>
          <div className="content">
            <h2>{list[index].name}</h2>
            <div>{list[index].text}</div>
          </div>
        </div>
      </CellMeasurer>
    );
  };

  return (
    <div className="App">
      <h1>React Virtualization</h1>
      <div className="list">
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              deferredMeasurementCache={cache}
              rowHeight={cache.rowHeight}
              rowRenderer={renderRow}
              rowCount={list.length}
              overscanRowCount={3}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default App;
