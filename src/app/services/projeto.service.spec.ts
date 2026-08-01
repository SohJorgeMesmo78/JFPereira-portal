import { ProjetoService } from './projeto.service';

describe('ProjetoService', () => {
  let service: ProjetoService;

  beforeEach(() => {
    service = new ProjetoService();
  });

  it('returns the requested number of projects', () => {
    const result = service.getProjetosPaginados(0, 2);

    expect(result.data.length).toBe(2);
    expect(result.itemInicial).toBe(1);
    expect(result.itemFinal).toBe(2);
    expect(result.totalItens).toBe(4);
  });

  it('wraps from the last project to the first without changing the source list', () => {
    const originalProjects = [...service.getProjetos()];
    const result = service.getProjetosPaginados(3, 2);

    expect(result.data.map((project) => project.nome)).toEqual([
      'Soroban',
      'JFPereira Portfolio'
    ]);
    expect(result.itemInicial).toBe(4);
    expect(result.itemFinal).toBe(1);
    expect(service.getProjetos()).toEqual(originalProjects);
  });

  it('normalizes negative indexes', () => {
    const result = service.getProjetosPaginados(-1, 1);

    expect(result.data[0].nome).toBe('Soroban');
    expect(result.itemInicial).toBe(4);
  });

  it('returns an empty page when the page size is invalid', () => {
    const result = service.getProjetosPaginados(0, 0);

    expect(result.data).toEqual([]);
    expect(result.itemInicial).toBe(0);
    expect(result.itemFinal).toBe(0);
  });
});
