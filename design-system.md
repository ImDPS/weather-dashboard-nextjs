# Weather Dashboard Design System

## Brand Colors

### Primary Colors
- **Dark Blue**: #2C3741 (Replaces Planto's dark green for header background, navigation elements)
- **Light Blue**: #7AB2D8 (Replaces light green for active elements, buttons)
- **Sky Blue**: #C2E0E8 (Replaces mint green for graphs, UI elements)

### Secondary Colors
- **Sunshine Yellow**: #F9D77E (Retained for sun/daylight indicators, highlight elements)
- **Sunset Orange**: #F7A37B (Retained for temperature indicators, alerts)
- **Cloud Gray**: #D9E3EA (New color for cloud/precipitation elements)

### Weather Condition Colors
- **Storm Blue**: #4A6FA5 (For storm indicators)
- **Rain Blue**: #85B9D3 (For rain indicators)
- **Snow White**: #F0F4F7 (For snow indicators)
- **Sunny Yellow**: #FFD166 (For clear sky indicators)
- **Cloudy Gray**: #A9B5C1 (For overcast indicators)

### Neutrals
- **White**: #FFFFFF (Background, cards)
- **Light Gray**: #F5F5F3 (Secondary backgrounds)
- **Medium Gray**: #D3D3D3 (Borders, dividers)
- **Dark Gray**: #565656 (Secondary text)
- **Black**: #1C1C1C (Primary text)

## Typography

### Font Families
- **Primary Font**: Sans-serif (Inter, SF Pro, or similar modern sans-serif)
- **Weather Icons Font**: Custom weather icon font or standard icon set

### Font Sizes
- **Header XL**: 28px (Welcome back, [Username]!)
- **Header L**: 22px (Section headers like "Today's Forecast")
- **Header M**: 18px (Card headers like "Temperature")
- **Body**: 16px (Regular text)
- **Small**: 14px (Secondary information, dates)
- **XSmall**: 12px (Labels, units)

### Font Weights
- **Bold**: 700 (Headers, important stats like temperature)
- **Medium**: 500 (Sub-headers, emphasized text)
- **Regular**: 400 (Body text)

### Line Heights
- **Tight**: 1.2 (Headers)
- **Normal**: 1.5 (Body text)

## Spacing System

### Base Unit: 8px

- **2XS**: 4px (Minimal spacing)
- **XS**: 8px (Tight spacing between related elements)
- **S**: 16px (Standard spacing between elements)
- **M**: 24px (Medium spacing between sections)
- **L**: 32px (Large spacing between major sections)
- **XL**: 48px (Extra large spacing for page margins)

## UI Components

### Cards
- **Border Radius**: 16px
- **Background**: White
- **Shadow**: Subtle drop shadow, approximately 0px 4px 12px rgba(0,0,0,0.05)
- **Padding**: 24px

### Weather Status Cards
- **Border Radius**: 16px
- **Background**: Color coded by weather type (using Weather Condition Colors)
- **Shadow**: Slightly more pronounced shadow, 0px 4px 16px rgba(0,0,0,0.1)
- **Padding**: 24px
- **Icon Size**: 32px

### Buttons
- **Border Radius**: 8px
- **Padding**: 8px 16px
- **Height**: 40px
- **States**: Default, Hover, Active, Disabled
- **Primary Button**: Light Blue background (#7AB2D8), white text
- **Secondary Button**: White background, Light Blue border, Light Blue text

### Icons
- **Style**: Clean, line-based weather icons with 2px stroke
- **Size**: 20px by 20px standard, 32px for featured weather conditions
- **Colors**: Usually inherit from text or use brand colors

### Inputs
- **Height**: 40px
- **Border Radius**: 8px
- **Border**: 1px solid Medium Gray
- **Active Border**: Light Blue

### Dropdowns
- **Border Radius**: 8px
- **Arrow Indicator**: Small downward-facing chevron

### Charts and Graphs
- **Line Thickness**: 2px for main lines
- **Point Size**: 8px for data points
- **Colors**: Uses brand color palette (temperature in Sunset Orange, precipitation in Cloud Gray)
- **Legends**: Small colored indicators with 12px text

### Temperature Indicators
- **Bar Height**: 8px
- **Border Radius**: 4px
- **Cold Colors**: Sky Blue to Dark Blue gradient
- **Hot Colors**: Sunset Orange to Red gradient

### Precipitation Indicators
- **Bar Height**: 8px
- **Border Radius**: 4px
- **Colors**: Cloud Gray to Storm Blue gradient based on intensity

### Tabs
- **Padding**: 12px 24px
- **Active Indicator**: 2px bottom border in Light Blue
- **Border Radius**: 4px for top corners

## Layout

### Grid System
- **Columns**: 12-column grid
- **Gutter**: 24px
- **Container Width**: Responsive, max-width approximately 1200px

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Sidebar
- **Width**: Approximately 320px
- **Background**: Dark Blue (#2C3741)
- **Text Color**: White

## Weather-Specific Components

### Current Weather Card
- **Size**: Large, prominent placement
- **Content**: Temperature, condition, feels like, humidity, wind
- **Icon Size**: 48px
- **Temperature Font Size**: 42px

### Hourly Forecast
- **Display**: Horizontal scrollable list
- **Card Width**: 80px
- **Icon Size**: 24px
- **Temperature Font Size**: 16px

### Daily Forecast
- **Display**: Vertical list
- **Row Height**: 64px
- **Icon Size**: 24px
- **High/Low Temperature**: Displayed side by side

### Weather Map
- **Border Radius**: 16px
- **Controls**: Minimal overlay controls
- **Legend**: Small, semi-transparent background

### Weather Timeline
- **Line Height**: 2px
- **Point Diameter**: 12px (large points), 6px (small points)
- **Colors**: Uses primary and weather condition color palette
- **Labels**: Small text with time indicators

## Imagery and Graphics

### Weather Icons
- **Style**: Simple, clear with appropriate fill or gradients
- **Size**: Varies from 16px to 48px based on importance
- **Colors**: Weather condition colors

### Location Graphics
- **Style**: Simple map pins or city illustrations
- **Size**: 24px standard
- **Color**: Light Blue

### Avatar/Profile Pictures
- **Size**: 40px by 40px
- **Border Radius**: Circle (50%)
- **Border**: None or subtle 1px white border

## Animations and Transitions

### Duration
- **Fast**: 150ms (Micro-interactions)
- **Normal**: 300ms (Standard transitions)
- **Slow**: 500ms (Weather animations)

### Easing
- **Standard**: ease-in-out
- **Entrance**: ease-out
- **Exit**: ease-in

### Weather-Specific Animations
- **Rain**: Gentle downward animation
- **Snow**: Slow floating downward animation
- **Sun**: Subtle pulsing or radiating effect
- **Clouds**: Slow horizontal movement

## Accessibility

### Color Contrast
- Text on backgrounds should maintain WCAG AA compliance (4.5:1 for normal text)
- Interactive elements should be clearly distinguishable
- Weather conditions should be identifiable by both color and icon

### Focus States
- All interactive elements should have visible focus states
- Outline: 2px solid Light Blue

### Text Size
- Minimum body text size: 14px
- Minimum button text size: 16px
- Temperature display: Large and prominent

## Dashboard Components

### Temperature Display
- **Large Format**: 42px with degree symbol
- **Small Format**: 24px with degree symbol
- **Unit Toggle**: Easy switch between Celsius and Fahrenheit

### Wind Information
- **Speed**: Displayed with appropriate unit (m/s, km/h, mph)
- **Direction**: Arrow icon pointing in wind direction
- **Gusts**: Secondary smaller text when applicable

### Humidity and Pressure
- **Display**: Percentage for humidity, hPa/inHg for pressure
- **Icons**: Water droplet for humidity, barometer for pressure

### Sunrise/Sunset
- **Time Format**: Based on user preference (12h/24h)
- **Visual**: Small horizon illustration with sun position
- **Colors**: Gradient from dark blue to yellow-orange
