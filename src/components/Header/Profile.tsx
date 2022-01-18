import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Robson José</Text>
                    <Text color="gray.300" fontSize="small">robsonlopes.jr@gmail.com</Text>
                </Box>
            )}

            <Avatar size="md" name="Robson Junior" src="https://github.com/robsonlopesjr.png" />
        </Flex>
    )
}