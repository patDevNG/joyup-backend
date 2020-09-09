import { DependencyContainer, container } from 'tsyringe';
import { IocAdapter } from 'routing-controllers';

class ContainerAdapter implements IocAdapter {
	constructor(private readonly container: DependencyContainer) {}

	get<T>(token: any): T {
		return this.container.resolve<T>(token);
	}
}

export const adaptedContainer = new ContainerAdapter(container);