import createStyles, {colors, fonts, padding, margin, dimensions} from './base.js'

export default panelStyles = createStyles({
  section: {
    fontSize: fonts.md,
    color: colors.secondary
  },
  container: {
    padding: 10,
    width: dimensions.fullWidth,
    backgroundColor: '#1D1D1D'
  },
  containerFull: {
    width: dimensions.fullWidth,
    minHeight: dimensions.fullHeight,
    backgroundColor: '#1D1D1D'
  },
  containerBackgroundColor: {
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
  flexCenter: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textMD: {
    color: '#fff',
    fontSize: fonts.md
  },
  flexCenterRecruit: {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 8,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.accent
  },
  flexCenterRecruitText3: {
    flex: 2,
    color: '#fff',
    fontSize: fonts.md
  },
  flexCenterRecruitText2: {
    flex: 2,
    color: '#fff',
    fontSize: fonts.md
  },
  flexCenterRecruitText1: {
    flex: 1,
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
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
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
    color: colors.tertiary,
    backgroundColor: colors.primary,
    opacity: 0.9,
    textAlign: 'center',
    fontSize: 11,
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
    marginLeft: 10,
    fontSize: fonts.md,
    color: colors.font
  },
  playerBarArrow: {
    fontSize: fonts.md,
    color: colors.tertiary
  },
  actionBarContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
    width: dimensions.fullWidth,
    backgroundColor: colors.primary,
    borderBottomWidth: 4,
    borderColor: colors.accent
  },
  profileSection: {
    width: dimensions.fullWidth,
    padding: padding.lg
  },
  profileSectionTitle: {
    padding: 3,
    textAlign: 'center',
    color: colors.font,
    fontSize: 18,
    backgroundColor: colors.accent,
    width: dimensions.fullWidth
  },
  profileTextName: {
    fontSize: 22,
    color: colors.font
  },
  profileRankImage: {
    left: 55,
    top: 55
  },
  profileRoleContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  profileRoleText: {
    fontSize: 22,
    color: colors.tertiary
  },
  opggButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 5,
    left: 15,
    backgroundColor: colors.accent,
    width: 80,
    height: 35,
    borderRadius: 3
  },
  opggButtonText: {
    marginLeft: 10,
    marginRight: 10
  },
  profileDetailsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  profileDetailsItem: {
    width: 165,
    margin: 10,
  },
  profileDetailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.font
  },
  profileDetailsText: {
    fontSize: 16,
    color: colors.font
  },
  profileAvailabilityDays: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.accent,
    borderRadius: 17.5,
  },
  profileAvailabilityDaysText: {
    color: colors.accent,
    fontSize: 15
  },
  profileAvailabilityDaysFilled: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: colors.accent,
    borderWidth: 2,
    borderColor: colors.font,
    borderRadius: 17.5,
  },
  profileAvailabilityDaysTextFilled: {
    color: colors.font,
    fontSize: 15
  },
  profileSocialItem: {
    width: 35,
    height: 35,
    margin: 10
  },
  recruitModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    height: dimensions.fullHeight,
    width: dimensions.fullWidth
  },
  formModalContainer: {
    width: 350,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'grey',
    backgroundColor: colors.primary,
    opacity: 1,
  },
  formModalInputLabel: {
    color: colors.font,
    fontSize: 20,
  },
  formModalSectionTitle: {
    padding: 3,
    textAlign: 'center',
    color: colors.font,
    fontSize: 20,
    backgroundColor: colors.accent,
  },
  formModalPlayerDetailContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  formModalCol: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 160,
    marginLeft: 5,
    marginRight: 5,
  },
  formModalInputWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  formModalInputTeam: {
    width: 300,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'grey',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
  formModalInputRole: {
    width: 150,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'grey',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  formModalInputMonth: {
    width: 70,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'grey',
    paddingLeft: 5,
    paddingRight: 5,
    marginRight: 10,
  },
  formModalInputDay: {
    width: 70,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'grey',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 5,
    paddingRight: 5,
  },
  formModalInputYear: {
    width: 150,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'grey',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
  formModalSendButton: {
    width: 173,
    padding: 3,
    textAlign: 'center',
    color: colors.font,
    fontSize: 26,
    backgroundColor: colors.accent,
  },
  formModalCloseButton: {
    width: 173,
    padding: 3,
    textAlign: 'center',
    color: colors.font,
    fontSize: 26,
    backgroundColor: 'rgba(160,0,0,1)',
  },
})