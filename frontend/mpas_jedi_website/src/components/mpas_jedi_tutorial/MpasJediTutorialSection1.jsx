import React from "react";
import CodeBlock from "../Markdown";
import '../../style/MpasJediTutorial.css'
import {Link} from "react-router-dom";

const MpasJediTutorialSection1 = () => {
    return (
        <div className={"MpasJediTutorial"}>
            <div className={"NavButton"}>
                <div className={"PreviousButton"}>
                    <Link to={'/tutorial/section0'}>
                        <button>Prerequisites and environment setup</button>
                    </Link>
                </div>
                <div className={"NextButton"}>
                    <Link to={'/tutorial/section2'}>
                        <button>Generating localization files and running 3D/4DEnVar conventional obs</button>
                    </Link>
                </div>
            </div>
            <div className={"content"}>
                <h1>Compiling/Testing MPAS-JEDI</h1>
                <p>
                    In this section, the goal is to obtain, compile, and test the MPAS-JEDI code through cmake/ctest
                    mechanism.
                    <h2 style={{textAlign: "center"}}>Git clone the mpas-bundle repository</h2>
                    In order to build MPAS-JEDI and its dependencies, it is recommended to access source code from
                    mpas-bundle. We will use the 'release/3.0.1' branch from mpas-bundle-3.0.1:

                    <CodeBlock
                        value={"cd /glade/derecho/scratch/$USER/mpas_jedi_tutorial\n" +
                            "mkdir mpas_bundle_v3\n" +
                            "cd mpas_bundle_v3\n" +
                            "git clone -b release/3.0.1 https://github.com/JCSDA/mpas-bundle code"}
                        language={"bash"}
                    />
                    The git command will clone the mpas-bundle repository from github to a local directory 'code' , then
                    make the 'release/3.0.1' branch as the active branch. The output to the terminal should look as
                    following:
                    <CodeBlock value={
                        "Cloning into 'code'...\n" +
                        "remote: Enumerating objects: 461, done.\n" +
                        "remote: Counting objects: 100% (82/82), done.\n" +
                        "remote: Compressing objects: 100% (44/44), done.\n" +
                        "remote: Total 461 (delta 44), reused 71 (delta 38), pack-reused 379\n" +
                        "Receiving objects: 100% (461/461), 144.69 KiB | 1.64 MiB/s, done.\n" +
                        "Resolving deltas: 100% (273/273), done."}
                               language={"bash"}
                    />
                    Note that the mpas-bundle repository does not contain actual source code. Instead, the
                    CMakeLists.txt
                    file under code includes the github repositories's branch/tag information needed to build MPAS-JEDI.
                    One
                    important difference from previous mpas-bundle releases (1.0.0 and 2.0.0) is that 3.0.1-based bundle
                    works together with the official 8.2.2-based MPAS-A model code from MPAS-v8.2.2. We now create a
                    'build'
                    folder and load the spack-stack environment pre-built using the GNU compiler:
                    <CodeBlock value={
                        "source ./code/env-setup/gnu-derecho.sh\n" +
                        "module list\n"
                    } language={"bash"}/>
                    The output to the module list in the terminal should look like the following (102 modules!!!). These
                    packages are from pre-installed spack-stack-1.6.0.
                    <CodeBlock value={
                        "Currently Loaded Modules:\n" +
                        "1) ecflow/5.8.4                 35) base-env/1.0.0        69) json-schema-validator/2.1.0\n" +
                        "2) mysql/8.0.33                 36) boost/1.83.0          70) odc/1.4.6\n" +
                        "3) ncarenv/23.09           (S)  37) openblas/0.3.24       71) py-attrs/21.4.0\n" +
                        "4) gcc/12.2.0                   38) py-setuptools/63.4.3  72) py-pycparser/2.21\n" +
                        "5) stack-gcc/12.2.0             39) py-numpy/1.22.3       73) py-cffi/1.15.1\n" +
                        "6) craype/2.7.20                40) bufr/12.0.1           74) py-findlibs/0.0.2\n" +
                        "7) cray-mpich/8.1.25            41) ecbuild/3.7.2         75) py-eccodes/1.5.0\n" +
                        "8) libfabric/1.15.2.0           42) libpng/1.6.37         76) py-f90nml/1.4.3\n" +
                        "9) cray-pals/1.2.11             43) openjpeg/2.3.1        77) py-h5py/3.7.0\n" +
                        "10) stack-cray-mpich/8.1.25      44) eccodes/2.32.0        78) py-cftime/1.0.3.4\n" +
                        "11) tar/1.34                     45) eigen/3.4.0           79) py-netcdf4/1.5.8\n" +
                        "12) gettext/0.21.1               46) eckit/1.24.5          80) py-bottleneck/1.3.7\n" +
                        "13) libxcrypt/4.4.35             47) fftw/3.3.10           81) py-numexpr/2.8.4\n" +
                        "14) zlib/1.2.13                  48) fckit/0.11.0          82) py-et-xmlfile/1.0.1\n" +
                        "15) sqlite/3.43.2                49) fiat/1.2.0            83) py-openpyxl/3.1.2\n" +
                        "16) util-linux-uuid/2.38.1       50) ectrans/1.2.0         84) py-six/1.16.0\n" +
                        "17) python/3.10.13               51) qhull/2020.2          85) py-python-dateutil/2.8.2\n" +
                        "18) stack-python/3.10.13         52) atlas/0.35.1          86) py-pytz/2023.3\n" +
                        "19) nghttp2/1.57.0               53) git-lfs/3.3.0         87) py-pyxlsb/1.0.10\n" +
                        "20) curl/8.4.0                   54) gsibec/1.1.3          88) py-xlrd/2.0.1\n" +
                        "21) cmake/3.23.1                 55) gsl-lite/0.37.0       89) py-xlsxwriter/3.1.7\n" +
                        "22) git/2.41.0                   56) libjpeg/2.1.0         90) py-xlwt/1.3.0\n" +
                        "23) pkg-config/0.29.2            57) krb5/1.19.2           91) py-pandas/1.5.3\n" +
                        "24) hdf5/1.14.0                  58) libtirpc/1.3.3        92) py-pybind11/2.11.0\n" +
                        "25) snappy/1.1.10                59) hdf/4.2.15            93) py-pycodestyle/2.11.0\n" +
                        "26) zstd/1.5.2                   60) jedi-cmake/1.4.0      94) py-pyhdf/0.10.4\n" +
                        "27) c-blosc/1.21.5               61) libxt/1.1.5           95) libyaml/0.2.5\n" +
                        "28) netcdf-c/4.9.2               62) libxmu/1.1.4          96) py-pyyaml/6.0\n" +
                        "29) nccmp/1.9.0.1                63) libxpm/3.5.12         97) py-scipy/1.11.3\n" +
                        "30) netcdf-fortran/4.6.1         64) libxaw/1.0.13         98) py-packaging/23.1\n" +
                        "31) parallel-netcdf/1.12.2       65) udunits/2.2.28        99) py-xarray/2023.7.0\n" +
                        "32) parallelio/2.5.10            66) ncview/2.1.9         100) sp/2.5.0\n" +
                        "33) py-pip/23.1.2                67) netcdf-cxx4/4.3.1    101) jedi-base-env/1.0.0\n" +
                        "34) wget/1.20.3                  68) json/3.10.5          102) jedi-mpas-env/1.0.0\n" +

                        "Where:\n" +
                        "S:  Module is Sticky, requires --force to unload or purge"
                    } language={"bash"}
                    />
                </p>
                <h2>Compiling MPAS-JEDI</h2>
                <p>
                    MPAS-JEDI uses cmake to automatically fetch the code from various github repositories, listed in
                    CMakeLists.txt under ~code. Now type the command below under the build directory:
                    <CodeBlock
                        value={
                            "git lfs install\n" +
                            "mkdir build\n" +
                            "cd build\n" +
                            "cmake ../code\n"
                        }
                        language={"bash"}
                    />
                    After it completes (may take 15-20 min depending on network connection), you will see the actual
                    source code of various repositories (e.g., oops, vader, saber, ufo, ioda, crtm, mpas-jedi, and MPAS)
                    is now under the code directory. Meanwhile, Makefile files to build executables are generated under
                    the build directory. Now it is ready to compile MPAS-JEDI under 'build' using the standard make.
                    However, it is NOT recommended to compile the code on the login node. Instead, better compiling code
                    using a compute node with an interactive job by issuing the command below:

                    WARNING:This cmake step could take 15-20 min to complete. You may continue to read instructions
                    while waiting.
                    <CodeBlock
                        value={
                            "qsub -A ummm0008 -N build-bundle -q S6244386 -l job_priority=premium -l walltime=03:00:00 -l select=1:ncpus=128:mem=235GB -I"
                        } language={"bash"}
                    />
                    This requests an interactive job to the 'S6244386' queue, with a job name 'build-bundle', 3 hours
                    walltime of a compute node with 128 cores, the 'premium' priority and an account number 'UMMM0008'.

                    Note that the interactive job does not have the spack-stack environment loaded, you have to reload
                    the spack-stack environment (under ~build), and then compiling code with the parallel make using 20
                    cores:

                    <CodeBlock
                        value={
                            "source ../code/env-setup/gnu-derecho.sh\n" +
                            "make -j20\n"
                        } language={"bash"}
                    />
                    This could take ~25 min. Using more cores for build could speed up a bit, but will not help too much
                    from our experience. Also note that the reason we do the cmake step (will clone various github
                    repositories) on the login node instead of a compute node is that the derecho's compute nodes have a
                    much slower internet connection.

                    WARNING:The compilation could take ~25 min to complete. You may continue to read instructions while
                    waiting.

                    Once we reach 100% of the compilation, many executables will be generated under ~build/bin. mpas
                    model and mpas-jedi DA related executables are:
                    <CodeBlock
                        value={
                            "ls bin/mpas*\n" +
                            "bin/mpas_atmosphere bin/mpasjedi_enshofx.x bin/mpasjedi_rtpp.x\n" +
                            "bin/mpas_atmosphere_build_tables bin/mpasjedi_ens_mean_variance.x bin/mpasjedi_saca.x\n" +
                            "bin/mpas_init_atmosphere bin/mpasjedi_error_covariance_toolbox.x bin/mpasjedi_variational.x\n" +
                            "bin/mpasjedi_convertstate.x bin/mpasjedi_forecast.x bin/mpas_namelist_gen\n" +
                            "bin/mpasjedi_converttostructuredgrid.x bin/mpasjedi_gen_ens_pert_B.x bin/mpas_parse_atmosphere\n" +
                            "bin/mpasjedi_eda.x bin/mpasjedi_hofx3d.x bin/mpas_parse_init_atmosphere\n" +
                            "bin/mpasjedi_enkf.x bin/mpasjedi_hofx.x bin/mpas_streams_gen"
                        } language={"bash"}
                    />

                    The last step is to ensure that the code was compiled properly by running the MPAS-JEDI ctests, with
                    two lines of simple command:
                    <CodeBlock
                        value={
                            "export LD_LIBRARY_PATH=/glade/derecho/scratch/${USER}/mpas_jedi_tutorial/mpas_bundle_v3/build/lib:$LD_LIBRARY_PATH\n" +
                            "cd mpas-jedi\n" +
                            "ctest"
                        } language={"bash"}
                    />
                    At the moment the tests are running (take ~5 min to finish), it indicates if it passes or fails. At
                    the end, a summary is provided with a percentage of the tests that passed, failed and the processing
                    times.

                    The output to the terminal should look as following:

                    <CodeBlock
                        value={
                            "......\n" +
                            "100% tests passed, 0 tests failed out of 59\n" +

                            "Label Time Summary:\n" +
                            "executable = 18.76 sec*proc (13 tests)\n" +
                            "mpasjedi = 237.40 sec*proc (59 tests)\n" +
                            "mpi = 235.68 sec*proc (56 tests)\n" +
                            "script = 218.64 sec*proc (44 tests)\n" +

                            "Total Test time (real) = 237.49 sec"
                        } language={"bash"}
                    />
                    WARNING:You could run ctest just under the 'build' directory, but that will run a total of 2159
                    ctest cases for all component packages (oops, vader, saber, ufo, ioda, crtm, mpas-jedi etc.) in
                    mpas-bundle, which will take much longer time. Maybe something you can play with after this
                    tutorial. You may use 'ctest -N, which will only list names of ctest cases, but not run them).

                    To determine if a test passes or fails, a comparison of the test log and reference file is done
                    internally taking as reference a tolerance value. This tolerance is specified via YAML file. These
                    files can be found under mpas-jedi/test/testoutput in the build folder:

                    <CodeBlock
                        value={
                            "3denvar_2stream_bumploc.ref 4denvar_ID.run ens_mean_variance.run.ref\n" +
                            "3denvar_2stream_bumploc.run 4denvar_ID.run.ref forecast.ref\n" +
                            "3denvar_2stream_bumploc.run.ref 4denvar_VarBC_nonpar.run forecast.run\n" +
                            "3denvar_amsua_allsky.ref 4denvar_VarBC_nonpar.run.ref forecast.run.ref\n" +
                            "3denvar_amsua_allsky.run 4denvar_VarBC.ref gen_ens_pert_B.ref\n" +
                            "3denvar_amsua_allsky.run.ref 4denvar_VarBC.run gen_ens_pert_B.run\n" +
                            "3denvar_amsua_bc.ref 4denvar_VarBC.run.ref gen_ens_pert_B.run.ref\n" +
                            "3denvar_amsua_bc.run 4dfgat.ref hofx3d_nbam.ref\n" +
                            "3denvar_amsua_bc.run.ref 4dfgat.run hofx3d_nbam.run\n" +
                            "3denvar_bumploc.ref 4dfgat.run.ref hofx3d_nbam.run.ref\n" +
                            "3denvar_bumploc.run 4dhybrid_bumpcov_bumploc.ref hofx3d.ref\n" +
                            "3denvar_bumploc.run.ref 4dhybrid_bumpcov_bumploc.run hofx3d_ropp.ref\n" +
                            "3denvar_dual_resolution.ref 4dhybrid_bumpcov_bumploc.run.ref hofx3d_rttovcpp.ref\n" +
                            "3denvar_dual_resolution.run convertstate_bumpinterp.ref hofx3d.run\n" +
                            "3denvar_dual_resolution.run.ref convertstate_bumpinterp.run hofx3d.run.ref\n" +
                            "3dfgat_pseudo.ref convertstate_bumpinterp.run.ref hofx4d_pseudo.ref\n" +
                            "3dfgat_pseudo.run convertstate_unsinterp.ref hofx4d_pseudo.run\n" +
                            "3dfgat_pseudo.run.ref convertstate_unsinterp.run hofx4d_pseudo.run.ref\n" +
                            "3dfgat.ref convertstate_unsinterp.run.ref hofx4d.ref\n" +
                            "3dfgat.run converttostructuredgrid_latlon.ref hofx4d.run\n" +
                            "3dfgat.run.ref converttostructuredgrid_latlon.run hofx4d.run.ref\n" +
                            "3dhybrid_bumpcov_bumploc.ref converttostructuredgrid_latlon.run.ref letkf_3dloc.ref\n" +
                            "3dhybrid_bumpcov_bumploc.run dirac_bumpcov.ref letkf_3dloc.run\n" +
                            "3dhybrid_bumpcov_bumploc.run.ref dirac_bumpcov.run letkf_3dloc.run.ref\n" +
                            "3dvar_bumpcov_nbam.ref dirac_bumpcov.run.ref lgetkf_height_vloc.ref\n" +
                            "3dvar_bumpcov_nbam.run dirac_bumploc.ref lgetkf_height_vloc.run\n" +
                            "3dvar_bumpcov_nbam.run.ref dirac_bumploc.run lgetkf_height_vloc.run.ref\n" +
                            "3dvar_bumpcov.ref dirac_bumploc.run.ref lgetkf.ref\n" +
                            "3dvar_bumpcov_ropp.ref dirac_noloc.ref lgetkf.run\n" +
                            "3dvar_bumpcov_rttovcpp.ref dirac_noloc.run lgetkf.run.ref\n" +
                            "3dvar_bumpcov.run dirac_noloc.run.ref parameters_bumpcov.ref\n" +
                            "3dvar_bumpcov.run.ref dirac_spectral_1.ref parameters_bumpcov.run\n" +
                            "3dvar.ref dirac_spectral_1.run parameters_bumpcov.run.ref\n" +
                            "3dvar.run dirac_spectral_1.run.ref parameters_bumploc.ref\n" +
                            "3dvar.run.ref eda_3dhybrid.ref parameters_bumploc.run\n" +
                            "4denvar_bumploc.ref eda_3dhybrid.run parameters_bumploc.run.ref\n" +
                            "4denvar_bumploc.run eda_3dhybrid.run.ref rtpp.ref\n" +
                            "4denvar_bumploc.run.ref ens_mean_variance.ref rtpp.run\n" +
                            "4denvar_ID.ref ens_mean_variance.run rtpp.run.ref"
                        } language={"bash"}
                    />
                    After running ctest, you can terminate your interactive job by simply typing 'exit' or by:
                    <CodeBlock
                        value={
                            "qstat -u $USER\n" +
                            "qdel job-id-number"
                        } language={"bash"}
                    />
                    The qstat command will return your job ID in a form of 'job-id-number.desched*'. The qdel command
                    will kill your interactive job by only supplying 'job-id-number'.

                    Note that the tutorial test cases are designed with single-precision MPAS model test dataset.
                    Therefore, we pre-compiled mpas-bundle code with single-precision mode in

                    /glade/derecho/scratch/liuz/mpas_bundle_v3_public_gnuSP
                    Tutorial attendees should use this pre-build bundle for mpas-jedi practicals and should set an
                    environment variable 'bundle_dir' for convenience in the subsequent practices.

                    export bundle_dir=/glade/derecho/scratch/liuz/mpas_bundle_v3_public_gnuSP

                </p>
            </div>
        </div>
    );
};

export default MpasJediTutorialSection1;
