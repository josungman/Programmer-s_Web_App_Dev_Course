
/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GeneratePropsH.js
 */
#pragma once

#include <react/renderer/components/view/ViewProps.h>
#include <react/renderer/core/PropsParserContext.h>

namespace facebook::react {

enum class LEGACY_RNCViewPagerLayoutDirection { Ltr, Rtl };

static inline void fromRawValue(const PropsParserContext& context, const RawValue &value, LEGACY_RNCViewPagerLayoutDirection &result) {
  auto string = (std::string)value;
  if (string == "ltr") { result = LEGACY_RNCViewPagerLayoutDirection::Ltr; return; }
  if (string == "rtl") { result = LEGACY_RNCViewPagerLayoutDirection::Rtl; return; }
  abort();
}

static inline std::string toString(const LEGACY_RNCViewPagerLayoutDirection &value) {
  switch (value) {
    case LEGACY_RNCViewPagerLayoutDirection::Ltr: return "ltr";
    case LEGACY_RNCViewPagerLayoutDirection::Rtl: return "rtl";
  }
}
enum class LEGACY_RNCViewPagerOrientation { Horizontal, Vertical };

static inline void fromRawValue(const PropsParserContext& context, const RawValue &value, LEGACY_RNCViewPagerOrientation &result) {
  auto string = (std::string)value;
  if (string == "horizontal") { result = LEGACY_RNCViewPagerOrientation::Horizontal; return; }
  if (string == "vertical") { result = LEGACY_RNCViewPagerOrientation::Vertical; return; }
  abort();
}

static inline std::string toString(const LEGACY_RNCViewPagerOrientation &value) {
  switch (value) {
    case LEGACY_RNCViewPagerOrientation::Horizontal: return "horizontal";
    case LEGACY_RNCViewPagerOrientation::Vertical: return "vertical";
  }
}
enum class LEGACY_RNCViewPagerOverScrollMode { Auto, Always, Never };

static inline void fromRawValue(const PropsParserContext& context, const RawValue &value, LEGACY_RNCViewPagerOverScrollMode &result) {
  auto string = (std::string)value;
  if (string == "auto") { result = LEGACY_RNCViewPagerOverScrollMode::Auto; return; }
  if (string == "always") { result = LEGACY_RNCViewPagerOverScrollMode::Always; return; }
  if (string == "never") { result = LEGACY_RNCViewPagerOverScrollMode::Never; return; }
  abort();
}

static inline std::string toString(const LEGACY_RNCViewPagerOverScrollMode &value) {
  switch (value) {
    case LEGACY_RNCViewPagerOverScrollMode::Auto: return "auto";
    case LEGACY_RNCViewPagerOverScrollMode::Always: return "always";
    case LEGACY_RNCViewPagerOverScrollMode::Never: return "never";
  }
}
enum class LEGACY_RNCViewPagerKeyboardDismissMode { None, OnDrag };

static inline void fromRawValue(const PropsParserContext& context, const RawValue &value, LEGACY_RNCViewPagerKeyboardDismissMode &result) {
  auto string = (std::string)value;
  if (string == "none") { result = LEGACY_RNCViewPagerKeyboardDismissMode::None; return; }
  if (string == "on-drag") { result = LEGACY_RNCViewPagerKeyboardDismissMode::OnDrag; return; }
  abort();
}

static inline std::string toString(const LEGACY_RNCViewPagerKeyboardDismissMode &value) {
  switch (value) {
    case LEGACY_RNCViewPagerKeyboardDismissMode::None: return "none";
    case LEGACY_RNCViewPagerKeyboardDismissMode::OnDrag: return "on-drag";
  }
}

class LEGACY_RNCViewPagerProps final : public ViewProps {
 public:
  LEGACY_RNCViewPagerProps() = default;
  LEGACY_RNCViewPagerProps(const PropsParserContext& context, const LEGACY_RNCViewPagerProps &sourceProps, const RawProps &rawProps);

#pragma mark - Props

  bool scrollEnabled{true};
  LEGACY_RNCViewPagerLayoutDirection layoutDirection{LEGACY_RNCViewPagerLayoutDirection::Ltr};
  int initialPage{0};
  LEGACY_RNCViewPagerOrientation orientation{LEGACY_RNCViewPagerOrientation::Horizontal};
  int offscreenPageLimit{0};
  int pageMargin{0};
  LEGACY_RNCViewPagerOverScrollMode overScrollMode{LEGACY_RNCViewPagerOverScrollMode::Auto};
  bool overdrag{false};
  LEGACY_RNCViewPagerKeyboardDismissMode keyboardDismissMode{LEGACY_RNCViewPagerKeyboardDismissMode::None};
  bool useLegacy{true};
};

enum class RNCViewPagerLayoutDirection { Ltr, Rtl };

static inline void fromRawValue(const PropsParserContext& context, const RawValue &value, RNCViewPagerLayoutDirection &result) {
  auto string = (std::string)value;
  if (string == "ltr") { result = RNCViewPagerLayoutDirection::Ltr; return; }
  if (string == "rtl") { result = RNCViewPagerLayoutDirection::Rtl; return; }
  abort();
}

static inline std::string toString(const RNCViewPagerLayoutDirection &value) {
  switch (value) {
    case RNCViewPagerLayoutDirection::Ltr: return "ltr";
    case RNCViewPagerLayoutDirection::Rtl: return "rtl";
  }
}
enum class RNCViewPagerOrientation { Horizontal, Vertical };

static inline void fromRawValue(const PropsParserContext& context, const RawValue &value, RNCViewPagerOrientation &result) {
  auto string = (std::string)value;
  if (string == "horizontal") { result = RNCViewPagerOrientation::Horizontal; return; }
  if (string == "vertical") { result = RNCViewPagerOrientation::Vertical; return; }
  abort();
}

static inline std::string toString(const RNCViewPagerOrientation &value) {
  switch (value) {
    case RNCViewPagerOrientation::Horizontal: return "horizontal";
    case RNCViewPagerOrientation::Vertical: return "vertical";
  }
}
enum class RNCViewPagerOverScrollMode { Auto, Always, Never };

static inline void fromRawValue(const PropsParserContext& context, const RawValue &value, RNCViewPagerOverScrollMode &result) {
  auto string = (std::string)value;
  if (string == "auto") { result = RNCViewPagerOverScrollMode::Auto; return; }
  if (string == "always") { result = RNCViewPagerOverScrollMode::Always; return; }
  if (string == "never") { result = RNCViewPagerOverScrollMode::Never; return; }
  abort();
}

static inline std::string toString(const RNCViewPagerOverScrollMode &value) {
  switch (value) {
    case RNCViewPagerOverScrollMode::Auto: return "auto";
    case RNCViewPagerOverScrollMode::Always: return "always";
    case RNCViewPagerOverScrollMode::Never: return "never";
  }
}
enum class RNCViewPagerKeyboardDismissMode { None, OnDrag };

static inline void fromRawValue(const PropsParserContext& context, const RawValue &value, RNCViewPagerKeyboardDismissMode &result) {
  auto string = (std::string)value;
  if (string == "none") { result = RNCViewPagerKeyboardDismissMode::None; return; }
  if (string == "on-drag") { result = RNCViewPagerKeyboardDismissMode::OnDrag; return; }
  abort();
}

static inline std::string toString(const RNCViewPagerKeyboardDismissMode &value) {
  switch (value) {
    case RNCViewPagerKeyboardDismissMode::None: return "none";
    case RNCViewPagerKeyboardDismissMode::OnDrag: return "on-drag";
  }
}

class RNCViewPagerProps final : public ViewProps {
 public:
  RNCViewPagerProps() = default;
  RNCViewPagerProps(const PropsParserContext& context, const RNCViewPagerProps &sourceProps, const RawProps &rawProps);

#pragma mark - Props

  bool scrollEnabled{true};
  RNCViewPagerLayoutDirection layoutDirection{RNCViewPagerLayoutDirection::Ltr};
  int initialPage{0};
  RNCViewPagerOrientation orientation{RNCViewPagerOrientation::Horizontal};
  int offscreenPageLimit{0};
  int pageMargin{0};
  RNCViewPagerOverScrollMode overScrollMode{RNCViewPagerOverScrollMode::Auto};
  bool overdrag{false};
  RNCViewPagerKeyboardDismissMode keyboardDismissMode{RNCViewPagerKeyboardDismissMode::None};
  bool useLegacy{true};
};

} // namespace facebook::react
