import BenchIndexItem from './bench_index_item';
import React from 'react';

class BenchIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBenches()
    }

    render() {
        const benchItems = this.props.benches.map(bench => (
            <BenchIndexItem key={bench.id} bench={bench} />
        ));
        return (
            <ul>
                {benchItems}
            </ul>
        )
    }
}

export default BenchIndex;