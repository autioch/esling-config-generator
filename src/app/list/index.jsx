import React, { PureComponent } from 'react';
import { CellMeasurer, CellMeasurerCache, AutoSizer, List } from 'react-virtualized';
import Rule from './rule';

// import './index.css';

export default class MacroList extends PureComponent {
  constructor(props) {
    super(props);

    this.rowRenderer = this.rowRenderer.bind(this);
    this.resetCache = this.resetCache.bind(this);
    this.keyMapper = this.keyMapper.bind(this);
    this.cache = new CellMeasurerCache({
      fixedWidth: true,
      keyMapper: this.keyMapper
    });
  }
  resetCache() {
    this.cache.resetAll();
  }
  keyMapper(index) {
    return this.props.rules[index].id;
  }
  componentDidMount() {
    document.addEventListener('resize', this.resetCache);
  }
  componentDidUpdate() {
    this.list.recomputeRowHeights();
  }
  componentWillUnmount() {
    document.removeEventListener('resize', this.resetCache);
  }
  rowRenderer({ index, key, parent, style }) { // eslint-disable-line no-shadow
    const rule = this.props.rules[index];

    return (
      <CellMeasurer cache={this.cache} columnIndex={0} key={key} rowIndex={index} parent={parent} >
        <Rule style={style} rule={rule} index={index} />
      </CellMeasurer>
    );
  }
  render() {
    const { cache, props: { rules } } = this;

    return (
      <div className="macros__list">
        <AutoSizer>
          {({ height, width }) => (
            <List
              deferredMeasurementCache={cache}
              height={height}
              rowCount={rules.length}
              rowHeight={cache.rowHeight}
              rowRenderer={this.rowRenderer}
              width={width}
              ref={(ref) => {
                this.list = ref;
              }}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}
