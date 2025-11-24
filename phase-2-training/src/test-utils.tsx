import { render } from '@testing-library/react'
import { AppProviders } from './Testing/components/providers/app-providers'
import type { ReactElement } from 'react'
import type { RenderOptions } from '@testing-library/react'


const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
    render(ui, { wrapper: AppProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }