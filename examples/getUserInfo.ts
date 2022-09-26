// GET /user/info/:id

export const getUserInfoById = async (event) => {
  const { userId } = event.pathParameters
  // @ts-ignore
  const userInDb = await prisma.user.findUnique({
    where: {
      id: userId,
    }
  })

  if (!userInDb) {
    console.log('User not found')
  }

  return userInDb
}