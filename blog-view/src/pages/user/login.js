
export default function () { 

    const handleGoGithubPassport = function () { 
        window.location.href = '/api/passport/github';
    }

    return (
        <div onClick={handleGoGithubPassport}>github</div>
    )
}