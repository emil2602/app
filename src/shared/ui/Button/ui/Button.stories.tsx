import type { Meta, StoryObj } from '@storybook/react'

import Button, { ButtonTheme } from './Button'

import 'app/styles/index.scss'

const meta = {
  title: 'shared/Button',
  component: Button,
  decorators: [
    (Story) => (
        <div className='app light'>
            <Story />
        </div>
    )
  ]
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Text'
  }
}

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR
  }
}

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
  }
}
