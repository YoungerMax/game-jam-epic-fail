import cannonAsset from '../../assets/cannon.png';
import bigCannonAsset from '../../assets/bigCannon.png';
import highPowerCannonAsset from '../../assets/highPowerCannon.png';
import doubleCannonAsset from '../../assets/doubleCannon.png';
import rotaryCannonAsset from '../../assets/rotaryCannon.png';
import missileLauncherAsset from '../../assets/missileLauncher.png';
import woodenBaseAsset from '../../assets/woodenBase.png';
import metalBaseAsset from '../../assets/metalBase.png';
import ProjectileLibrary from './ProjectileLibrary';

interface Tower {
    cost: number;
    damage: number;
    attackSpeed: number;
    range: number;
    projectileType: keyof typeof ProjectileLibrary;
    assetUrl: string;
    baseAssetUrl: string;
}

export default {
    'Cannon': {
        'cost': 50,
        'damage': 10,
        'attackSpeed': 1,
        'range': 200,
        'projectileType': 'Cannon Ball',
        'assetUrl': cannonAsset,
        'baseAssetUrl': woodenBaseAsset
    },
    'Big Cannon': {
        'cost': 200,
        'damage': 100,
        'attackSpeed': 5,
        'range': 150,
        'projectileType': 'Big Cannon Ball',
        'assetUrl': bigCannonAsset,
        'baseAssetUrl': woodenBaseAsset
    },
    'Rifle': {
        'cost': 1000,
        'damage': 100,
        'attackSpeed': 1,
        'range': 300,
        'projectileType': 'High Power Cannon Ball',
        'assetUrl': highPowerCannonAsset,
        'baseAssetUrl': metalBaseAsset
    },
    'Double Cannon': {
        'cost': 500,
        'damage': 15,
        'attackSpeed': 0.5,
        'range': 200,
        'projectileType': 'Cannon Ball',
        'assetUrl': doubleCannonAsset,
        'baseAssetUrl': woodenBaseAsset
    },
    'Rotary Cannon': {
        'cost': 1500,
        'damage': 25,
        'attackSpeed': 0.1,
        'range': 300,
        'projectileType': 'High Power Cannon Ball',
        'assetUrl': rotaryCannonAsset,
        'baseAssetUrl': metalBaseAsset
    },
    'Missile Launcher': {
        'cost': 3000,
        'damage': 10,
        'attackSpeed': 4,
        'range': 500,
        'projectileType': 'Missile',
        'assetUrl': missileLauncherAsset,
        'baseAssetUrl': metalBaseAsset
    }
} as Record<string, Tower>;