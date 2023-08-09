import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode, memo } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = memo((props: StoreProviderProps) => {
	const { children, initialState, asyncReducers } = props;

	const store = createReduxStore(
		initialState as StateSchema,
		asyncReducers as ReducersMapObject<StateSchema>,
	);

	return <Provider store={store}>{children}</Provider>;
});