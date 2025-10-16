export interface SpecialisTulkDto {
  esszencia: number,
  magia: number,
  chi: number,
  rezonancia: number,
  kockatartalek: number,
}
export interface AsztalisTulDto {
  asztEro: number,
  asztUgy: number,
  asztGyo: number,
  asztAll: number,
}
export interface FizikaiTulDto {
  fizEro: number,
  fizUgy: number,
  fizGyo: number,
  fizAll: number,
}
  export interface TulajdonsagokDto extends FizikaiTulDto, AsztalisTulDto, SpecialisTulkDto {
  }