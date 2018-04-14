import createStyles, {colors, fonts, padding, dimensions} from './base.js'

export default panelStyles = createStyles({
  section: {
    fontSize: fonts.md,
    color: colors.secondary
  },
  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    width: dimensions.fullWidth,
    height: dimensions.fullHeight,
    backgroundColor: '#1D1D1D'
  },
  header: {
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
    backgroundColor: '#2662B2'
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl
  },
  textMD: {
    color: '#fff',
    fontSize: fonts.md
  }
})