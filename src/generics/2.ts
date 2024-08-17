type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<
  T1 extends Pick<AllType, 'name' | 'color'>,
  T2 extends Pick<AllType, 'position' | 'weight'>
>(top: T1, bottom: T2): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}