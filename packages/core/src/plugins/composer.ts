/**
 * Create composer interface factory
 *
 * @internal
 */

import { Ref, computed, isRef, ref, watch } from 'vue'
import { I18n } from 'vue-i18n'
import { enUS } from 'date-fns/locale'
import { loadDateFNSLocale } from '../utils'
import { VueIhuntersofbook } from './vue-huntersofbook'
import { IhuntersofbookPlugins } from '.'
export async function loadDateFNSLocaleFactory(i18n?: I18n, locale?: string) {
  if (i18n !== undefined) {
    const locale = isRef(i18n.global.locale)
      ? (i18n.global.locale as Ref<string>).value
      : i18n.global.locale
    return await loadDateFNSLocale(locale)
  }
  else if (locale) {
    return await loadDateFNSLocale(locale)
  }
  return await loadDateFNSLocale('en')
}

export function createComposer(plugins: IhuntersofbookPlugins): VueIhuntersofbook {
  const selectLanguage = ref('en')
  watch(plugins.i18n.global.locale as any, (res: string) => {
    if (res)
      selectLanguage.value = res
  })

  const languageComputed = computed(() => selectLanguage.value)
  const composer = {
    dateLocale: enUS,
    id: 0,
    selectLanguage: languageComputed,
  } as VueIhuntersofbook
  return composer
}
