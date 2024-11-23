import cannonBallAsset from '../../assets/cannonBall.png';
import bigCannonBallAsset from '../../assets/bigCannonBall.png';
import highPowerCannonBallAsset from '../../assets/highPowerCannonBall.png';
import missileAsset from '../../assets/missile.png';

interface Projectile {
    speed: number;
    assetUrl: string;
}

export default {
    'Cannon Ball': {
        'speed': 1,
        'assetUrl': cannonBallAsset,
    },
    'Big Cannon Ball': {
        'speed': 0.5,
        'assetUrl': bigCannonBallAsset,
    },
    'High Power Cannon Ball': {
        'speed': 2,
        'assetUrl': highPowerCannonBallAsset,
    },
    'Missile': {
        'speed': 1.5,
        'assetUrl': missileAsset,
    }
} as Record<string, Projectile>;