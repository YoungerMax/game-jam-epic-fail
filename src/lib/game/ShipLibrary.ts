import raftAsset from '../../assets/raft.png';
import sailboatAsset from '../../assets/sailboat.png';
import submarineAsset from '../../assets/submarine.png';
import aircraftCarrierAsset from '../../assets/aircraftCarrier.png';

interface Ship {
    cost: number;
    health: number;
    speed: number;
    assetUrl: string;
}

export default {
    'Raft': {
        'cost': 10,
        'health': 10,
        'speed': 0.3,
        'assetUrl': raftAsset
    },
    'Sailboat': {
        'cost': 100,
        'health': 100,
        'speed': 0.2,
        'assetUrl': sailboatAsset
    },
    'Submarine': {
        'cost': 500,
        'health': 1000,
        'speed': 0.06,
        'assetUrl': submarineAsset
    },
    'Aircraft Carrier': {
        'cost': 3_000,
        'health': 10_000,
        'speed': 0.03,
        'assetUrl': aircraftCarrierAsset
    }
} as Record<string, Ship>;;