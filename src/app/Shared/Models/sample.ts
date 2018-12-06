
enum sampleQuality {
  Good = 0,
  Suspect = 1,
  Bad = 2
}

export class Sample {
  quality: sampleQuality;
  time: Date;
  value: number;
}
