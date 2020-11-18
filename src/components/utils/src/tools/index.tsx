export const setBgCardColor = (arr: String[]) => {

  for (let i = 0; i <= arr.length - 1; i++) {
    switch (arr[i]) {
      case 'grass':
        return 'bgGrass';
      case 'poison':
        return 'bgGrass';
      case 'fire':
        return 'bgFire';
      case 'bug':
        return 'bgBug';
      case 'water':
        return 'bgWater';
      case 'normal':
        return 'bgWater';
      case 'electric':
        return 'bgElectric';
      default:
        return 'bgDefault';
    }
  }

  return 'bgDefault';
};
