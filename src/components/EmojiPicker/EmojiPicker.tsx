import { FC } from 'react'
import EmojiPicker, {
  EmojiStyle,
  SkinTones,
  Theme,
  EmojiClickData,
  SuggestionMode,
  SkinTonePickerLocation,
} from 'emoji-picker-react'
import './Emoji.css'

interface IEmojiComponentProps {
  onChange: (e: string) => void
}

const EmojiComponent: FC<IEmojiComponentProps> = ({ onChange }) => {
  const onClick = (emojiData: EmojiClickData) => {
    onChange(emojiData.emoji)
  }

  return (
    <EmojiPicker
      onEmojiClick={onClick}
      autoFocusSearch={true}
      theme={Theme.AUTO}
      searchDisabled
      skinTonePickerLocation={SkinTonePickerLocation.SEARCH}
      height={350}
      width='50%'
      emojiVersion='0.6'
      lazyLoadEmojis={true}
      previewConfig={{
        defaultCaption: 'Pick one!',
        defaultEmoji: '1f92a', // 🤪
      }}
      suggestedEmojisMode={SuggestionMode.RECENT}
      skinTonesDisabled
      searchPlaceHolder='Filter'
      defaultSkinTone={SkinTones.NEUTRAL}
      emojiStyle={EmojiStyle.NATIVE}
    />
  )
}

export default EmojiComponent
