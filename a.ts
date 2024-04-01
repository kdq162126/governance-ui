import { Connection, PublicKey } from '@solana/web3.js'
import { getProposals } from "utils/GovernanceTools";
import {
    getGovernanceAccounts,
    getRealm,
    Governance,
    ProposalState,
    pubkeyFilter,
    VoteRecord,
    YesNoVote,
    ProgramAccount,
    RpcContext
} from '@solana/spl-governance'
import dayjs from 'dayjs'
import { fmtTokenAmount } from '@utils/formatting'
import { castVote } from 'actions/castVote';
import { Realm } from '@hub/components/DiscoverPage/gql';



const publicKeyStrings: string[] = [
    '8Dnt2mCrsWjspmZTEdthsNUNFxRS1CyMVADm8YzmEsSd',
];

// Create an array of PublicKey objects
const publicKeys: PublicKey[] = publicKeyStrings.map(publicKeyStr => new PublicKey(publicKeyStr));

const conn = new Connection('https://realms-develope-935c.devnet.rpcpool.com/67f608dc-a353-4191-9c34-293a5061b536/', 'confirmed')
const daoPk = new PublicKey('GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw')
getRealm(conn, new PublicKey('CpCev6Pp3Meh1h4WL7xJRjtdkpzSyfACPt6WUwQaVSWM')).then(response => {
    const realm = response

    const rpcContext = new RpcContext(
        proposal.owner,
        getProgramVersionForRealm(realmInfo!),
        wallet!,
        connection.current,
        connection.endpoint
    )

    castVote(
        {
            connection: conn,
            wallet: 
        }
    )
}).catch(error => {
    console.error(error)
})

// castVote(
//     {
//         cluster: 'devnet',
//         current: conn,
//         endpoint: conn.rpcEndpoint,
//     },
//     daoPk,

// )


// getProposals(
//     publicKeys,
//     {
//         cluster: 'devnet',
//         current: conn,
//         endpoint: conn.rpcEndpoint,
//     },
//     daoPk
// ).then(response => {
//     const proposalsResponse = response; // Assuming response is assigned correctly

//     proposalsResponse.flatMap((pbg) => pbg)
//         .map((proposal) => {
//             console.log()

//             const title = proposal.account.name
//             console.log('Title: ', title)

//             const creationDate = dayjs(
//                 (proposal?.account.signingOffAt
//                     ? proposal?.account.signingOffAt
//                     : proposal?.account.draftAt)!.toNumber() * 1000
//             ).format('DD-MM-YYYY HH:MM')
//             console.log('Creation Date:', creationDate)

//             const status = proposal
//                 ? ProposalState[proposal.account.state].toString()
//                 : null
//             console.log('Status:', status)
//             if (status !== 'Cancelled') {
//                 const proposaPK = proposal.pubkey.toBase58()
//                 console.log('Proposal PK:', proposaPK)

//                 const yesVotes = fmtTokenAmount(
//                     proposal.account.getYesVoteCount(),
//                     0
//                 )
//                 console.log('yesVotes:', yesVotes)

//                 const noVotes = fmtTokenAmount(
//                     proposal.account.getNoVoteCount(),
//                     0
//                 )
//                 console.log('noVotes: ', noVotes)
//             }
//         })

// }).catch(error => {
//     console.error('Error:', error);
// });
