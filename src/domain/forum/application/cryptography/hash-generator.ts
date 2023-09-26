// SOLID
// I -> Interface Segregation

export abstract class HashGenerator {
  abstract hash(plain: string): Promise<string>
}
