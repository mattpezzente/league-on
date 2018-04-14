import createStyles, {colors, fonts, padding, margin, dimensions} from './base.js'

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
    backgroundColor: colors.accent
  },
  section: {
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl
  },
  textMD: {
    color: '#fff',
    fontSize: fonts.md
  },
  playerBarWrapper: {
    marginBottom: margin.sm,
    padding: 3,
    paddingRight: 8,
    borderWidth: 1,
    borderColor: '#767676',
    borderRadius: 8
  },
  playerBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playerBarRank: {
    height: 50,
    width: 50,
    marginRight: 10
  },
  playerBarRankDivision: {
    height: 22,
    width: 22,
    top: 25,
    left: 28,
    padding: 3,
    fontSize: 12,
    color: colors.tertiary,
    backgroundColor: colors.primary,
    opacity: 0.9,
    textAlign: 'center',
    borderRadius: 12,
    borderColor: colors.tertiary,
    borderWidth: 1
  },
  playerBarName: {
    flex: 2,
    fontSize: fonts.md,
    color: colors.font
  },
  playerBarRole: {
    flex: 1,
    fontSize: fonts.md,
    color: colors.font
  },
  playerBarArrow: {
    fontSize: fonts.md,
    color: colors.tertiary
  }
})