import React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import { useLanguage } from '~/context/LanguageContext'

const LanguagePicker = () => {
  const { language, toggleLanguage } = useLanguage()

  const handleLanguageChange = (lang) => {
    toggleLanguage()
  }

  return (
    <Select defaultValue={language} onValueChange={handleLanguageChange}>
      <SelectTrigger aria-label="Select language" className="border">
        <img
          className="language-flag h-8 w-8 object-fill rounded-sm"
          src={language === 'no' ? '/flag_no.png' : '/flag_en.png'}
          alt={language === 'no' ? 'Norwegian flag' : 'English flag'}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="no" className="flex items-center">
            <img
              className="h-8 w-8 object-fill rounded-sm"
              src="/flag_no.png"
              alt="Norwegian flag"
            />
          </SelectItem>
          <SelectItem value="en" className="flex items-center">
            <img
              className="h-8 w-8 object-fill rounded-sm"
              src="/flag_en.png"
              alt="English flag"
            />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default LanguagePicker
