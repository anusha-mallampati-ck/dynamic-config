import { DynamicConfig } from './DynamicConfig'

import * as SettingsLoader from './SettingsLoader'
import { ObjectUtils, Utils } from './utils'
import { IConfigOptions } from './types'

export * from './ConfigLoader'
export { DynamicConfig } from './DynamicConfig'
export * from './constants'
export * from './types'
export * from './resolvers'
export * from './loaders'
export * from './translators'

// DEFAULT CONFIG CLIENT

export const config = Utils.memoize((options: IConfigOptions = {}): DynamicConfig => {
    return new DynamicConfig(ObjectUtils.overlayObjects(
        SettingsLoader.loadSettings(),
        options,
    ))
})
